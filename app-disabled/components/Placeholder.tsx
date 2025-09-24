interface PlaceholderProps {
  title?: string;
  className?: string;
}

export default function Placeholder({ title = 'Component', className = '' }: PlaceholderProps) {
  return (
    <div className={`bg-gray-10o0 p-8 rounded-lg text-center ${className}`}>
      <h3 className="text-lg font-semibold text-gray-60o0">{title}</h3>
      <p className="text-gray-50o0 mt-2">This component is being developed</p>
    </div>
  );
}