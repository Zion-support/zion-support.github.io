
  const result = await check_online ();
  expect (result).to_be (false);
});
// Test that safe_fetch throws custom error when fetch fails;

