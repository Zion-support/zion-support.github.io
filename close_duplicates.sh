#!/bin/bash
# Close duplicate PRs #25886-25946
# Keep only #25947 which has the fixes

for pr in {25886..25946}; do
  echo "Closing PR #$pr"
  gh pr close $pr --repo Zion-Holdings/zion.app \
    --comment "Duplicate PR - fixes merged in #25947"
done

echo "Done! All duplicates closed."