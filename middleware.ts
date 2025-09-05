import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicRoutes = [;
  "/",",
  "/about",",
  "/contact",",
  "/blog",",
  "/services",",
  "/solutions",",
  "/industries",",
  "/resources",",
  "/talent",",
  "/team",",
  "/partners",",
  "/news",",
  "/careers",",
  "/privacy",",
  "/terms",",
  "/cookies",",
  "/sitemap",",
  "/auth/login",",
  "/auth/register",",
  "/auth/forgot-password",",
  "/auth/reset-password",",
  "/auth/verify",",
;];,

  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};