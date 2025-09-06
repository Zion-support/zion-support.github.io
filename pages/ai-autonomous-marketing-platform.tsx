import ServicePage, {
  getStaticProps as getSlugStaticProps,;
} from './services/[slug]';
<<<<<<< HEAD
=======
import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]';
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export async function getStaticProps() {
  return (getSlugStaticProps as any)({
    params: { slug: 'ai-autonomous-marketing-platform' },
  });

export default function AIAutonomousMarketingPlatform(props: any) {
<<<<<<< HEAD
  return <ServicePage {...props} />;
=======
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
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
