// ProposalPDF — renders printable proposal using @react-pdf/renderer
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 40, fontSize: 11, fontFamily: 'Helvetica', color: '#1a1a1a' },
  header: { marginBottom: 30, borderBottom: '2 solid #6366f1', paddingBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 5 },
  subtitle: { fontSize: 14, color: '#666' },
  section: { marginBottom: 20 },
  sectionTitle: { fontSize: 14, fontWeight: 'bold', marginBottom: 8, color: '#333' },
  serviceRow: { flexDirection: 'row', borderBottom: '1 solid #e5e7eb', paddingVertical: 8 },
  serviceTitle: { flex: 3, fontWeight: 'bold' },
  servicePrice: { flex: 1, textAlign: 'right', color: '#059669' },
  total: { marginTop: 20, borderTop: '2 solid #1a1a1a', paddingTop: 15, fontSize: 16, fontWeight: 'bold', textAlign: 'right' },
  footer: { position: 'absolute', bottom: 30, left: 40, right: 40, fontSize: 9, color: '#888', borderTop: '1 solid #ddd', paddingTop: 10, textAlign: 'center' },
  stepsItem: { marginBottom: 4 }
});

interface ProposalData {
  companyName: string;
  contactEmail: string;
  contactPhone: string;
  budget: string;
  needs: string[];
  selectedServices: Array<{ id: string; title: string; pricing: Record<string, string> }>;
  timeline: string;
}

export default function ProposalPDF({ data }: { data: ProposalData }) {
  const total = data.selectedServices.reduce((sum, s) => {
    const priceStr = Object.values(s.pricing)[0] || '$0/mo';
    const match = String(priceStr).match(/\$([\d,]+)/);
    return sum + (match ? parseInt(match[1].replace(/,/g, '')) : 0);
  }, 0);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>Zion Tech Group — Custom Proposal</Text>
          <Text style={styles.subtitle}>Prepared for {data.companyName} • {new Date().toLocaleDateString()}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Information</Text>
          <Text>Email: {data.contactEmail}</Text>
          <Text>Phone: {data.contactPhone || 'Provided upon request'}</Text>
          <Text>Budget Range: {data.budget}</Text>
          <Text>Target Implementation: {data.timeline}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Business Objectives</Text>
          {data.needs.map((need, i) => (
            <Text key={i} style={styles.stepsItem}>• {need}</Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recommended Services & Pricing</Text>
          {data.selectedServices.map((s, idx) => (
            <View key={s.id} style={styles.serviceRow}>
              <Text style={styles.serviceTitle}>{s.title}</Text>
              <Text style={styles.servicePrice}>{Object.values(s.pricing)[0]}</Text>
            </View>
          ))}
          <View style={styles.total}>
            <Text>Estimated Monthly Investment: ${total.toLocaleString()}/mo</Text>
          </View>
          <Text style={{ fontSize: 9, color: '#666', marginTop: 6 }}>
            * Volume discounts of 10–25% apply for multi-service bundles.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Next Steps</Text>
          <Text style={styles.stepsItem}>1. Review proposal and select services</Text>
          <Text style={styles.stepsItem}>2. Schedule kickoff call (we'll reach out within 24h)</Text>
          <Text style={styles.stepsItem}>3. Sign agreement and provide initial requirements</Text>
          <Text style={styles.stepsItem}>4. Implementation begins within {data.timeline === 'ASAP' ? '48 hours' : 'agreed timeline'}</Text>
        </View>

        <Text style={styles.footer}>
          Zion Tech Group | 364 E Main St STE 1008, Middletown DE 19709 | +1 302 464 0950 | kleber@ziontechgroup.com
        </Text>
      </Page>
    </Document>
  );
}
