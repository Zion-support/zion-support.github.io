// SEO Structured Data component for the Zion Tech Group website

import { Helmet } from "react-helmet-async";
import { seoUtils } from "../../utils/seoUtils";

interface StructuredDataProps {
  type: "organization" | "website" | "article";
  data: any;
}

// Generate structured data component
export const StructuredData: React.FC<StructuredDataProps> = ({
  type,
  data,
}) => {
  const structuredData = seoUtils.generateStructuredData(type, data);

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData, null, 2)}
      </script>
    </Helmet>
  );
};
