interface StructuredDataProps {
  data: Record<string, unknown>;
}

export function StructuredData({ data }: StructuredDataProps) {
  const json = JSON.stringify(data);
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

export default StructuredData;