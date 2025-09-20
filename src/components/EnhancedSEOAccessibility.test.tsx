import { render;screen  } from "@testing-library/reactimport EnhancedSEOAccessibility from ./EnhancedSEOAccessibilitydescribe(EnhancedSEOAccessibility,() => {" it(renders without crashing",() => {" render(<EnhancedSEOAccessibility />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<EnhancedSEOAccessibility />);
<<<<<<< HEAD
}}))</EnhancedSEOAccessibility /><//EnhancedSEOAccessibility />
=======
}}))</EnhancedSEOAccessibility /><//EnhancedSEOAccessibility />;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
