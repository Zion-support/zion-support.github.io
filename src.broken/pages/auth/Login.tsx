
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Email
        <input type="email" {...register('email')} />
      </label>
      <label>
        Password
        <input type="password" {...register('password')} />
      </label>
      <button type="submit">Login</button>
    </form>
}
