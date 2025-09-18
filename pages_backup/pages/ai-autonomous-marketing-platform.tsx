
import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]';
export async function getStaticProps() {
	return (getSlugStaticProps as any)({ params: { slug: 'ai-autonomous-marketing-platform' } })
}
export default function AIAutonomousMarketingPlatform(props: any) {
	return <ServicePage {...props} />
}
import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]',;
;
export async function getStaticProps() {
	return (getSlugStaticProps as any)({ params: { slug: 'ai-autonomous-marketing-platform' } })
import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]';

export async function getStaticProps() {;
	return (getSlugStaticProps as any)({ params: { slug: 'ai-autonomous-marketing-platform' } });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
export default /**
 * AIAutonomousMarketingPlatform - Function description
 */
function AIAutonomousMarketingPlatform() {
return <ServicePage {...props} />;

}
;
export default function AIAutonomousMarketingPlatform(req, res) {
  try {
	return <ServicePage {...props} />;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;


