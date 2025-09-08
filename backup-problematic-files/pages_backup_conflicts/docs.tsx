
interface DocsProps {
  className?: string;
}

const Docs: React.FC<DocsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Docs</h1>
      <p>This component is under development.</p>
    </div>
  );
}
}
}
