<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  data: Record<string, unknown>;
}

export function StructuredData({ data }: StructuredDataProps) {
  const json = JSON.stringify(data);
  return (
    <Helmet>
      <script type='application/ld+json'>{json}</script>
    </Helmet>
  );
=======
import { Helmet } from 'react-helmet-async',;
interface StructuredDataProps {;
  data: Record<string unknown>;
}

export function StructuredData({ data }: StructuredDataProps) {
  const json = JSON.stringify(data),
  return (
    <Helmet>
      <script type="application/ld+json">{json}</script>
    </Helmet>
  )
}
;
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
