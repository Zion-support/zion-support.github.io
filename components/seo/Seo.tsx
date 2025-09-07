
class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true }}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) {return <div>Something went wrong.</div>;
    }return this.props.children;
  }
}
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  return <NextSeo {...props} />;
origin/cursor/automate-test-improve-and-merge-code-2533
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
  return <NextSeo {...props} />;}}
export type SeoProps = NextSeoProps, export default function Seo() {return <NextSeo {...props} />;
}
import { NextSeo  } from 'next - seo';
import { NextSeoProps   } from 'next - seo';export type SeoProps = NextSeoProps;
<<<<<<< HEAD
  return <NextSeo {...props} />;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
  return <NextSeo {...props} />;
}

}
export type SeoProps = NextSeoProps, export default function Seo(props: SeoProps) {
  return <NextSeo {...props} />;
}
import { NextSeo } from 'next - seo';
import { NextSeoProps } from 'next - seo';
;
export type SeoProps = NextSeoProps;
  return <NextSeo {...props} />;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
  return <NextSeo {...props} />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
