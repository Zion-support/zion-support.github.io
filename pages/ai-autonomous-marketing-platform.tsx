import ServicePage, {
  getStaticProps as getSlugStaticProps,;
} from './services/[slug]';
import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]';
ursor/integrate-build-improve-and-re-verify-b76c

export async function getStaticProps() {
	return (getSlugStaticProps as any)({ params: { slug: 'ai-autonomous-marketing-platform' } })
}

export default function AIAutonomousMarketingPlatform(props: any) {
  return <ServicePage {...props} />;
import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]';

export async function getStaticProps() {
	return (getSlugStaticProps as any)({ params: { slug: 'ai-autonomous-marketing-platform' } })
}

export default function AIAutonomousMarketingPlatform(props: any) {
	return <ServicePage {...props} />
}
	return <ServicePage {...props} />
}
ursor/integrate-build-improve-and-re-verify-b76c
