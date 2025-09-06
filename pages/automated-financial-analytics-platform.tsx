<<<<<<< HEAD
<<<<<<< HEAD
import ServicePage, {
  getStaticProps as getSlugStaticProps,;
} from './services/[slug]';
=======
import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export async function getStaticProps() {
	return (getSlugStaticProps as any)({ params: { slug: 'automated-financial-analytics-platform' } })
}

export default function AutomatedFinancialAnalyticsPlatform(props: any) {
<<<<<<< HEAD
  return <ServicePage {...props} />;
=======
import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]';

export async function getStaticProps() {
	return (getSlugStaticProps as any)({ params: { slug: 'automated-financial-analytics-platform' } })
}

export default function AutomatedFinancialAnalyticsPlatform(props: any) {
	return <ServicePage {...props} />
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
	return <ServicePage {...props} />
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
