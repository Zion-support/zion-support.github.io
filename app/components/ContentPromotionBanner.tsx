
interface ContentPromotionBannerProps {
  className?: string;
  children?: React.ReactNode;
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'contentpromotionbanner ' + className}>
      {children || <p>ContentPromotionBanner component</p>}
    </div>
  );
};

export default ContentPromotionBanner;
