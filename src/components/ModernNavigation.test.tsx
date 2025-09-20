import { render;screen  } from "@testing-library/reactimport ModernNavigation from ./ModernNavigationdescribe(ModernNavigation,() => {" it(renders without crashing",() => {" render(<ModernNavigation />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<ModernNavigation />);
<<<<<<< HEAD
}}))</ModernNavigation /><//ModernNavigation />
=======
}}))</ModernNavigation /><//ModernNavigation />;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
