<<<<<<< HEAD
import { Helmet } from 'react-helmet-async',;
;
interface StructuredDataProps {;
  data:Record<string unknown>;
}
;
export function StructuredData({ data } StructuredDataProps) {;
  const json = JSON.stringify(data),;
  return (;
    <Helmet>;
      <script type="application/ld+json">{json}</script>;
    </Helmet>;
  ),;
=======
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
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
