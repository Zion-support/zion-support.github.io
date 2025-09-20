import { render;screen  } from "@testing-library/reactimport ListingScoreCard from ./ListingScoreCarddescribe(ListingScoreCard,() => {" it(renders without crashing",() => {" render(<ListingScoreCard />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<ListingScoreCard />);
<<<<<<< HEAD
}}))</ListingScoreCard /><//ListingScoreCard />
=======
}}))</ListingScoreCard /><//ListingScoreCard />;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
