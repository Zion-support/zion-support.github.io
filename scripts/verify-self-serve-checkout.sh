#!/usr/bin/env bash
# Verify live Stripe Payment Links and local money pages.
set -euo pipefail
fail=0
check() {
  local url="$1"
  local code
  code=$(curl -sI -o /dev/null -w "%{http_code}" --max-time 20 "$url" || echo "000")
  if [[ "$code" != "200" && "$code" != "303" && "$code" != "302" ]]; then
    echo "FAIL $code $url"
    fail=1
  else
    echo "OK   $code $url"
  fi
}
while read -r u; do
  [[ -z "$u" || "$u" == \#* ]] && continue
  check "$u"
done <<'LINKS'
https://buy.stripe.com/dRmcN6d4ceO30D53hm4ZR0P
https://buy.stripe.com/bJe6oIggo5dt0D56ty4ZR0O
https://buy.stripe.com/dRmbJ2aW40Xd85xdW04ZR0Q
https://buy.stripe.com/4gM4gAc08cFV85x5pu4ZR0R
https://buy.stripe.com/eVq14ofck35ldpRdW04ZR0S
https://buy.stripe.com/cNi28sd4cfS74Tl8BG4ZR0T
https://buy.stripe.com/dRm3cw8NW0XdbhJf044ZR0V
https://buy.stripe.com/8x23cw0hqgWb85x3hm4ZR0U
https://buy.stripe.com/3cIdRa6FO5dt0D53hm4ZG05
https://buy.stripe.com/4gM14ofck0Xd1H94lq4ZG08
https://buy.stripe.com/7sY00k7JScFV99Bf044ZG06
https://buy.stripe.com/aFa5kEd4c21h3PhdW04ZG07
LINKS

if grep -R "buy.stripe.com/of_demo" public --include='*.html' | grep -v 'of_demo_\*' >/dev/null; then
  echo "FAIL leftover of_demo checkout URLs"
  fail=1
else
  echo "OK   no of_demo checkout URLs"
fi

exit $fail
