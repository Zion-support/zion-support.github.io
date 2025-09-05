<<<<<<< HEAD
import { Helmet } from 'react-helmet-async',
interface StructuredDataProps {
  data: Record<string unknown>
}

export function StructuredData({ data }: StructuredDataProps) {
  const json = JSON.stringify(data),
=======

interface StructuredDataProps {_data: Record<string, _unknown>;}

export function StructuredData(_{_data}: StructuredDataProps) {_const _json = JSON.stringify(data);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  return (
    <Helmet>
      <script type=&quot;application/ld+json&quot;>{json}</script>
    </Helmet>
  )
}
