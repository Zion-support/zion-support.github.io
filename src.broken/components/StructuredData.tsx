import { Helmet } from 'react-helmet-async',;
interface StructuredDataProps {;
  data: Record<string unknown>;
}
<<<<<<< HEAD

export function StructuredData({ data }: StructuredDataProps) {
  const json = JSON.stringify(data),
  return (
    <Helmet>
      <script type=&quot;application/ld+json&quot;>{json}</script>
    </Helmet>
  )
=======
;
export function StructuredData({ data }: StructuredDataProps) {;
  const json = JSON.stringify(data);
  return (;
    <Helmet>;
      <script type="application/ld+json">{json}</script>;
    </Helmet>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;