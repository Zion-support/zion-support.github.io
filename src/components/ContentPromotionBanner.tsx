import React from "react";

type Props = {
  variant?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  dismissible?: boolean;
  className?: string;
};

export default function ContentPromotionBanner(props: Props): React.JSX.Element {
  void props;
  return <div aria-hidden="true" style={{ display: "none" }} />;
}

