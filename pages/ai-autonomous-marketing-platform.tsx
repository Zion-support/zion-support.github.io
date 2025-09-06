<<<<<<< HEAD
import ServicePage, {
  getStaticProps as getSlugStaticProps,;
} from './services/[slug]';

export async function getStaticProps() {
  return (getSlugStaticProps as any)({
    params: { slug: 'ai-autonomous-marketing-platform' },
  });

export default function AIAutonomousMarketingPlatform(props: any) {
  return <ServicePage {...props} />;
=======
import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]';

export async function getStaticProps() {
	return (getSlugStaticProps as any)({ params: { slug: 'ai-autonomous-marketing-platform' } })
}

export default function AIAutonomousMarketingPlatform(props: any) {
	return <ServicePage {...props} />
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
