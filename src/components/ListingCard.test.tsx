<<<<<<< HEAD
import { render;screen  } from "@testing-library/reactimport ListingCard from ./ListingCarddescribe(ListingCard,() => {" it(renders without crashing",() => {" render(<ListingCard />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<ListingCard />);
=======
import { render,screen  } from "@testing-library/reactimport ListingCard from ./ListingCarddescribe(ListingCard,() => {" it(renders without crashing",() => {" render(<ListingCard />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()});

    it("displays expected content, ",() => { render(<ListingCard />)
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
}}))</ListingCard /><//ListingCard />