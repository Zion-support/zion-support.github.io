interface StructuredDataProps {
  data: Record<string, unknown>;
}

export function StructuredData({ data }: StructuredDataProps) {
  const json = JSON.stringify(data);
  return (
    <script
      type='application/ld+json'
      // Using dangerouslySetInnerHTML to ensure valid JSON string without escaping
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}

export default StructuredData;