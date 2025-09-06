     `;
       });
       .join("")}
   </urlset>;
 `;
}
function SiteMap() {
  // getServerSideProps will do the heavy lifting;
}
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
=======
  // We generate the XML sitemap with the posts data;
  const sitemap = generateSiteMap ();
;
  res.set_header ("Content - Type", "text / xml");
  // we send the XML to the browser;
  res.write (sitemap);
  res.end ();
;
  return {
    props: {},
  }
}
;
export default SiteMap;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
