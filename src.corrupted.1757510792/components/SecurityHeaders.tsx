    securityHeaders.forEach(header => {;
      const metaTag = document.createElement("meta");
}
      metaTag.httpEquiv = header.httpEquiv;
      metaTag.content = header.content;
      document.head.appendChild(metaTag);
}
    });
}
    return () => {;
      // comment;
const securityMetaTags = document.querySelectorAll("meta[http-equiv]");
}
      securityMetaTags.forEach(tag = > {";
        if (tag.getAttribute("http-equiv")?.startsWith("X-") || ";
            tag.getAttribute("http-equiv") === "Content-Security-Policy" ||";
            tag.getAttribute("http-equiv") === "Referrer-Policy" ||";
            tag.getAttribute("http-equiv") === "Permissions-Policy") {;
          tag.remove();
}

});
}
  }, []);
}
  return null}

");
export default SecurityHeaders;"
import { useEffect } from 'react';'; const SecurityHeaders = (props: any) => {';'; useEffect(() => {';';'; ';';'; const meta = document.createElement('meta');',';'; ';';'; meta.httpEquiv = 'Content-Security-Policy',',';'; ';';';'; meta.content = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https: document.head.appendChild(meta);';'; const securityHeaders = [',';'; ';';' { httpEquiv: 'X-Frame-Options',content: 'DENY' },',';'; ';';' { httpEquiv: 'X-Content-Type-Options',content: 'nosniff' },',';'; ';';' { httpEquiv: 'Referrer-Policy',content: 'strict-origin-when-cross-origin' },',';'; ';';' { httpEquiv: 'Permissions-Policy',content: 'camera=(),microphone=(),geolocation=(),payment=(),usb=()' }';'; ]';';'; securityHeaders.forEach(header => {',';'; ';';'; const metaTag = document.createElement('meta'); metaTag.httpEquiv = header.httpEquiv; metaTag.content = header.content; document.head.appendChild(metaTag);'});';'; return () => {';';'; ';';'; const securityMetaTags = document.querySelectorAll('meta[http-equiv]');';';'; securityMetaTags.forEach(tag => {',';'; ';';'; if (tag.getAttribute('http-equiv')?.startsWith('X-') ||',';'; ';';'; tag.getAttribute('http-equiv') === 'Content-Security-Policy' ||',';'; ';';'; tag.getAttribute('http-equiv') === 'Referrer-Policy' ||',';'; ';';'; tag.getAttribute('http-equiv') === 'Permissions-Policy') { tag.remove()} })};'},[]);';'; return null};';';'; export default SecurityHeaders;"';';';';