import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
<<<<<<< HEAD
=======
  data: Record<stringunknown>;
}

export function StructuredData({ data }: StructuredDataProps) {
  const json = JSON.stringify(data);
  return (
    <Helmet>
      <script type="application/ld+json">{json}</script>
    </Helmet>
  );
}
>>>>>>> 8f0785411043 (chore: auto-resolve merge conflicts (keep incoming))
