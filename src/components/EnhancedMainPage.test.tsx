<<<<<<< HEAD
import { render;screen  } from "@testing-library/reactimport EnhancedMainPage from ./EnhancedMainPagedescribe(EnhancedMainPage,() => {" it(renders without crashing",() => {" render(<EnhancedMainPage />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<EnhancedMainPage />);
=======
import { render,screen  } from "@testing-library/reactimport EnhancedMainPage from ./EnhancedMainPagedescribe(EnhancedMainPage,() => {" it(renders without crashing",() => {" render(<EnhancedMainPage />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()});

    it("displays expected content, ",() => { render(<EnhancedMainPage />)
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
}}))</EnhancedMainPage /><//EnhancedMainPage />