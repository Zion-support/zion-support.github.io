import { Helmet } from 'react-helmet-async',
interface StructuredDataProps {
  data: Record<string unknown>
}

export function StructuredData({ data }: StructuredDataProps) {
  const json = JSON.stringify(data),  return (
    <Helmet>
      <script type=&quot;application/ld+json&quot;>{json}</script>
    </Helmet>
  )
}
