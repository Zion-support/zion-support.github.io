import { Helmet } from 'react-helmet-async';
interface StructuredDataProps {
  data: Record<string, unknown>
}

export function StructuredData({ data }: StructuredDataProps) {
  const json = JSON.stringify($2);
  return (
    <Helmet>
      <script type='application/ld+json'>{json}</script>
    </Helmet>
  )
}
