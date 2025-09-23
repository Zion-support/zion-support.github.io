import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
<<<<<<< HEAD
  data: Record<string, unknown>;
=======
  data: Record<stringunknown>;
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
}

export function StructuredData({ data }: StructuredDataProps) {
  const json = JSON.stringify(data);
  return (
    <Helmet>
      <script type="application/ld+json">{json}</script>
    </Helmet>
  );
}
