<<<<<<< HEAD
interface ImageOptimizerProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  children?: React.ReactNode;
}

export default function Imageoptimizer({ className = '', children, ...props }: ImageoptimizerProps) {
  return (
    <div className={`imageoptimizer-component ${className}`} {...props}>
      {children}
    </div>
  );
};
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b18f

}