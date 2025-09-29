import React from 'react';

<<<<<<< HEAD
interface ContentPromotionBannerProps {
	variant?: "info" | "success" | "warning" | "danger";
	title?: string;
	description?: string;
	ctaText?: string;
	ctaLink?: string;
	dismissible?: boolean;
}

export default function ContentPromotionBanner(_props: ContentPromotionBannerProps): React.JSX.Element {
	return <div aria-label="Content Promotion Banner" />;
=======
interface Props {
  variant?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  dismissible?: boolean;
}

export default function ContentPromotionBanner(_props: Props): React.JSX.Element {
  return <div />;
>>>>>>> origin/main
}

export default ContentPromotionBanner;