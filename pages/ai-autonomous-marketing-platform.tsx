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
