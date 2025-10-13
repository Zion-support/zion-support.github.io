
<<<<<<< HEAD
interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'WebPage' | 'Service' | 'FAQPage' | 'BreadcrumbList' | 'SoftwareApplication';
  data: any;

interface StructureddataProps {
  className?: string;
  children?: React.ReactNode;
=======
  type: 'Organization' | 'WebSite' | 'WebPage' | 'Service' | 'FAQPage' | 'BreadcrumbList' | 'SoftwareApplication';
  data: any;
>>>>>>> cursor/fix-errors-and-merge-to-main-b18f
}

export default function Structureddata({ className = '', children, ...props }: StructureddataProps) {
}