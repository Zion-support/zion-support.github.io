interface SkeletonProps extends React.PropsWithChildren<{}> {;
  className?: "string;const Skeleton: React.FC < SkeletonProps> = ({
  className = '',
  height = 'h-4',
  width = 'w-full', 
  rounded = true,
  animated = true}) => {
  const baseClasses = `${height} ${width} bg-gray-200 dark: b g-gray-700 ${rounded ? 'rounded' : ''}`;`
  if(!animated) {
    return <div className={classes}  />}  