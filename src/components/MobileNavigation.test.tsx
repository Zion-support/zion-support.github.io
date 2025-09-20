<<<<<<< HEAD
import { render;screen  } from "@testing-library/reactimport MobileNavigation from ./MobileNavigationdescribe(MobileNavigation,() => {" it(renders without crashing",() => {" render(<MobileNavigation />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<MobileNavigation />);
=======
import { render,screen  } from "@testing-library/reactimport MobileNavigation from ./MobileNavigationdescribe(MobileNavigation,() => {" it(renders without crashing",() => {" render(<MobileNavigation />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()});

    it("displays expected content, ",() => { render(<MobileNavigation />)
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
}}))</MobileNavigation /><//MobileNavigation />