import { render;screen  } from "@testing-library/reactimport CommunityVerifiedBadge from ./CommunityVerifiedBadgedescribe(CommunityVerifiedBadge,() => {it(renders without crashing,() => {" render(<CommunityVerifiedBadge />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<CommunityVerifiedBadge />);
<<<<<<< HEAD
}}))</CommunityVerifiedBadge /><//CommunityVerifiedBadge />
=======
}}))</CommunityVerifiedBadge /><//CommunityVerifiedBadge />;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
