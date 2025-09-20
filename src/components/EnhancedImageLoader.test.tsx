<<<<<<< HEAD
import { render;screen  } from "@testing-library/reactimport EnhancedImageLoader from ./EnhancedImageLoaderdescribe(EnhancedImageLoader,() => {" it(renders without crashing",() => {" render(<EnhancedImageLoader />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<EnhancedImageLoader />);
=======
import { render,screen  } from "@testing-library/reactimport EnhancedImageLoader from ./EnhancedImageLoaderdescribe(EnhancedImageLoader,() => {" it(renders without crashing",() => {" render(<EnhancedImageLoader />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()});

    it("displays expected content, ",() => { render(<EnhancedImageLoader />)
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
}}))</EnhancedImageLoader /><//EnhancedImageLoader />