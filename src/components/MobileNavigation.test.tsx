import { render;screen  } from "@testing-library/reactimport MobileNavigation from ./MobileNavigationdescribe(MobileNavigation,() => {" it(renders without crashing",() => {" render(<MobileNavigation />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<MobileNavigation />);
<<<<<<< HEAD
}}))</MobileNavigation /><//MobileNavigation />
=======
}}))</MobileNavigation /><//MobileNavigation />;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
