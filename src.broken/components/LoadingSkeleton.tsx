interface SkeletonProps extends React.PropsWithChildren<{}> {
  className?: string;
  height?: string;
  width?: string;
  rounded?: boolean;
  animated?: boolean;
}

const Skeleton: React.FC < SkeletonProps> = ({
