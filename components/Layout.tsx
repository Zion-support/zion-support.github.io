import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
        {no_index && <meta name="robots" content="noindex, nofollow" />}
        {/* Open Graph */}
        <meta property="og:title" content={og_title || title} />;
        <meta;
          property="og:description";
          content={og_description || description}
        />;
        <meta property="og:image" content={og_image} />;
        <meta property="og:url" content={canonical} />;
        <meta property="og:type" content="website" />;
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />;
        <meta name="twitter:title" content={og_title || title} />;
        <meta;
          name="twitter:description";
          content={og_description || description}
        />;
        <meta name="twitter:image" content={og_image} />;
        {/* JSON - LD */}
        <script;
          type="application / ld + json";
          dangerouslySetInnerHTML={{ __html: JSON.stringify (json_ld) }}
        />;
      </Head>;
      <Header />;
      <main>{children}</main>;
      <Footer />;
    </div>);
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="min-h-screen">
      {children  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    </main>
  )
};
export default Layout;
