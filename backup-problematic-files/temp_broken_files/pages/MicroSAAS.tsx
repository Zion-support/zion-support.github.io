import Link from 'next/link';
import Layout from '../components/Layout';

interface MicroSAASProps {
  className?: string;
}

const MicroSAAS: React.FC<MicroSAASProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MicroSAAS</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MicroSAAS;