<<<<<<< HEAD
import React from 'react',
import { NextSeo } from 'next-seo',
import { NextSeoProps } from 'next-seo',
export type SeoProps = NextSeoProps,

export default function Seo(props: SeoProps) {
  return <NextSeo {...props} />
=======
import React from 'react';

export type SeoProps = NextSeoProps,

export default function Seo(_props: SeoProps) {_return <NextSeo {...props} />;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}