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
}
=======
 return (<Helmet> <script type="application/ld+json" > {
  json 
}</script> </Helmet>) 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
