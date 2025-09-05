
interface StructuredDataProps {_data: Record<string, _unknown>;}

export function StructuredData(_{_data}: StructuredDataProps) {_const _json = JSON.stringify(data);
  return (
    <Helmet>
      <script type="application/ld+json">{json}</script>
    </Helmet>
  );
}
