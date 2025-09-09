export default function CaseStudy({
  company,
  industry,
  result,
  description,
  metrics
}: CaseStudyProps) {
  return (
    <div className="case-study">
      <h3>{company}</h3>
      <p>{description}</p>
      <p>Industry: {industry}</p>
      <p>Result: {result}</p>
      <p>Metrics: {metrics}</p>
    </div>
  );
}