<<<<<<< HEAD


interface ContentStatisticsProps {
  className?: string;
  children?: React.ReactNode;
}
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-f8bc

const ContentStatistics: React.FC<ContentStatisticsProps> = ({ className, children }) => {
  return (
    <div className={className} role="region" aria-label="Content Statistics">
      {children || <p>Content Statistics</p>}
    </div>
  );
};

export default ContentStatistics;