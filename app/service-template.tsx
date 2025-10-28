
interface ServiceTemplateProps {
  title: string;
  description: string;
  className?: string;
}

export default function ServiceTemplate({ 
  title, 
  description, 
  className = '' 
}: ServiceTemplateProps) {
  return (
    <div className={`service-template ${className}`}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
