export type KycRole = 'client' | 'talent' | 'enterprise';
export type KycStatus = | 'not started' | 'in progress' | 'submitted' | 'approved' | 'rejected' | 'needs more info';
export type AmlStatus = 'clear' | 'match' | 'review' | 'unknown';
kind: | 'government id front' | 'government id back' | 'selfie' | 'business registration' | 'tax certificate' | 'proof of address' for (const req of required) {
  if (!uploadedKinds.has (req) ) missing.push (`document:$ {
  req 
}`) 
}
<<<<<<< HEAD

export interface KycProfile {
  userId: string;
  role: KycRole;
  fullLegalName?: string;
  dateOfBirth?: string; // ISO
  country?: string;
  businessName?: string;
  businessRegistrationNumber?: string;
  documents: KycDocumentMeta[];
  status: KycStatus;
  amlStatus: AmlStatus;
  riskScore?: number; // 0-100
  flags?: string[]; // e.g., ["mismatch","duplicate_ip"]
  lastUpdatedAt: string; // ISO
  createdAt: string; // ISO
  auditTrail: Array<{
    at: string;
    by: string;
    action: string;
    details?: Record<string, unknown>;
  }>;
}

export function getRequiredDocuments(
  role: KycRole
): Array<KycDocumentMeta['kind']> {
  if (role === 'client') {
    return ['government_id_front', 'government_id_back', 'selfie'];
  }
  if (role === 'enterprise') {
    return [
      'government_id_front',
      'government_id_back',
      'selfie',
      'business_registration',
      'tax_certificate',
    ];
  }
  return ['government_id_front', 'government_id_back']; // talent
}

export function getOptionalDocuments(
  role: KycRole
): Array<KycDocumentMeta['kind']> {
  if (role === 'talent') {
    return ['academic_certificate'];
  }
  return ['proof_of_address'];
}

export function canShowVerifiedBadge(profile?: KycProfile): boolean {
  return (
    !!profile && profile.status === 'approved' && profile.amlStatus !== 'match'
  );
}

export function getBadgeLabels(profile?: KycProfile): string[] {
  if (!profile) return [];
  const labels: string[] = [];
  if (profile.status === 'approved') labels.push('Verified Identity');
  if (profile.role === 'enterprise' && profile.status === 'approved')
    labels.push('Business Verified');
  return labels;
}

export function validateKycSubmission(profile: Partial<KycProfile>): {
  ok: boolean;
  missing: string[];
} {
  const missing: string[] = [];
  if (!profile.userId) missing.push('userId');
  if (!profile.role) missing.push('role');
  const required = profile.role ? getRequiredDocuments(profile.role) : [];
  const uploadedKinds = new Set((profile.documents || []).map(d => d.kind));
  for (const req of required) {
    if (!uploadedKinds.has(req)) missing.push(`document:${req}`);
  }
  if (profile.role === 'client' || profile.role === 'enterprise') {
    if (!profile.fullLegalName) missing.push('fullLegalName');
  }
  if (profile.role === 'enterprise') {
    if (!profile.businessName) missing.push('businessName');
    if (!profile.businessRegistrationNumber)
      missing.push('businessRegistrationNumber');
  }
  return { ok: missing.length === 0, missing };
}
=======
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
